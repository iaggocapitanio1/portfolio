export interface Project {
  title: string
  images?: string[]
  description: string
  tags: string[]
  category: string
  demoLink: string
  codeLink: string
}

export interface ModalState {
  isOpen: boolean
  images: string[]
  currentIndex: number
}
