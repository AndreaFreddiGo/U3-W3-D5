export interface AppleNavbarProps {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}
