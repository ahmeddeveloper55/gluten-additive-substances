import { Header as MHeader, Text, Title } from '@mantine/core'
import ChangeThemeIcon from '../button/ChangeThemeIcon'

const Header = () => (
  <MHeader height={60} p="xs">
    <div className="flex justify-between items-center px-10">
      <Text className="text-2xl md:text-4xl font-bold">
        🍞 Gluten Additives
      </Text>
      <ChangeThemeIcon />
    </div>
  </MHeader>
)

export default Header
