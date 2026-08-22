import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Tailwind,
  Text,
} from 'postcraft';

interface AccountConfirmationProps {
  confirmLink: string;
  expiryTime: string;
}

export default function AccountConfirmation({
  confirmLink,
  expiryTime,
}: AccountConfirmationProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-black text-white">
          <Preview>Confirm your Postcraft account</Preview>
          <Container className="mx-auto">
            <Heading className="font-bold text-center my-[48px] text-[32px]">
              Welcome to Postcraft!
            </Heading>
            <Text>
              Thank you for signing up! To complete your registration and start
              using Postcraft, please confirm your postcraft address.
            </Text>
            <Text className="mb-6">
              Click the button below to verify your postcraft. This link will expire
              in {expiryTime}.
            </Text>
            <Row className="w-full">
              <Column className="w-full">
                <Button
                  href={confirmLink}
                  className="bg-cyan-300 text-[20px] font-bold text-[#404040] w-full text-center border border-solid border-cyan-900 py-[8px] rounded-[8px]"
                >
                  Confirm Postcraft
                </Button>
              </Column>
            </Row>
            <Text className="mt-6">- Postcraft team</Text>
            <Hr style={{ borderTopColor: '#404040' }} />
            <Text className="text-[#606060] font-bold">
              Postcraft, 999 React St, Postcraft City, EC 12345
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

AccountConfirmation.PreviewProps = {
  confirmLink: 'https://postcraft/confirm/123',
  expiryTime: '24 hours',
} satisfies AccountConfirmationProps;
