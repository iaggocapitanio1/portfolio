export interface Project {
  title: string
  images?: string[]
  description: string
  tags: string[]
  category: string
  deployLink?: string
  codeLink?: string
}

export interface ModalState {
  isOpen: boolean
  images: string[]
  currentIndex: number
}
