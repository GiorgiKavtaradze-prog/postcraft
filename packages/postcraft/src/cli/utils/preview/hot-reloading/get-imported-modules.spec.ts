import { promises as fs } from 'node:fs';
import { getImportedModules } from './get-imported-modules.js';

vi.mock('@babel/traverse', async () => {
  const traverse = await vi.importActual('@babel/traverse');
  return { default: traverse };
});

describe('getImportedModules()', () => {
  it('works with this test file', async () => {
    const contents = await fs.readFile(import.meta.filename, 'utf8');

    expect(getImportedModules(contents)).toEqual([
      'node:fs',
      './get-imported-modules.js',
    ]);
  });

  it('works with direct exports', () => {
    const contents = `export * from './component-a';
    export { ComponentB } from './component-b'; 

    import { ComponentC } from './component-c';
    export { ComponentC }`;
    expect(getImportedModules(contents)).toEqual([
      './component-a',
      './component-b',
      './component-c',
    ]);
  });

  it('works with regular imports and double quotes', () => {
    const contents = `import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@postcraft/components";
import { Tailwind } from "@postcraft/tailwind";
import { Component } from '../../my-component';

import * as React from "react";
    `;
    expect(getImportedModules(contents)).toEqual([
      '@postcraft/components',
      '@postcraft/tailwind',
      '../../my-component',
      'react',
    ]);
  });

  it('works with regular imports and single quotes', () => {
    const contents = `import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from 'postcraft';
import { Tailwind } from '@postcraft/tailwind';
import { Component } from '../../my-component';

import * as React from 'react';
    `;
    expect(getImportedModules(contents)).toEqual([
      'postcraft',
      '@postcraft/tailwind',
      '../../my-component',
      'react',
    ]);
  });

  it('works with commonjs require with double quotes', () => {
    const contents = `const {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} = require("@postcraft/components");
const { Tailwind } = require("@postcraft/tailwind");
const { Component } = require("../../my-component");

const React = require("react");
    `;
    expect(getImportedModules(contents)).toEqual([
      '@postcraft/components',
      '@postcraft/tailwind',
      '../../my-component',
      'react',
    ]);
  });

  it('works with commonjs require with single quotes', () => {
    const contents = `const {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} = require('@postcraft/components');
const { Tailwind } = require('@postcraft/tailwind');
const { Component } = require('../../my-component');

const React = require('react');
    `;
    expect(getImportedModules(contents)).toEqual([
      '@postcraft/components',
      '@postcraft/tailwind',
      '../../my-component',
      'react',
    ]);
  });
});
