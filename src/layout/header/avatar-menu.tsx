import { Menu, Text } from '../../components';

export function AvatarMenu() {
  return (
    <Menu
      items={[
        {
          key: '1',
          onClick: () => {},
          label: <Text>Logout</Text>
        }
      ]}
    />
  );
}
