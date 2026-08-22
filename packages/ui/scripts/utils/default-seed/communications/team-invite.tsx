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

interface TeamInviteProps {
  inviterName: string;
  teamName: string;
  inviteLink: string;
  role: string;
}

export default function TeamInvite({
  inviterName,
  teamName,
  inviteLink,
  role,
}: TeamInviteProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-black text-white">
          <Preview>
            {inviterName} has invited you to join {teamName} on Postcraft
          </Preview>
          <Container className="mx-auto">
            <Heading className="font-bold text-center my-[48px] text-[32px]">
              You've been invited!
            </Heading>
            <Text>
              {inviterName} has invited you to join {teamName} as a {role}.
            </Text>
            <Text>
              Postcraft helps teams collaborate on postcraft templates and manage
              their postcraft campaigns effectively.
            </Text>
            <Text className="mb-6">
              Click the button below to accept the invitation and get started:
            </Text>
            <Row className="w-full">
              <Column className="w-full">
                <Button
                  href={inviteLink}
                  className="bg-cyan-300 text-[20px] font-bold text-[#404040] w-full text-center border border-solid border-cyan-900 py-[8px] rounded-[8px]"
                >
                  Accept Invitation
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

TeamInvite.PreviewProps = {
  inviterName: 'John Doe',
  teamName: 'Marketing Team',
  inviteLink: 'https://postcraft/join/team/123',
  role: 'Editor',
} satisfies TeamInviteProps;
