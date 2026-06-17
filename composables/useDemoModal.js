// Shared state for the lead-capture modal (Book a Demo / Get Started / Join Waitlist)
export const useDemoModal = () => {
  const isOpen = useState('demoModalOpen', () => false)
  const variant = useState('demoModalVariant', () => 'demo')

  const open = (v = 'demo') => {
    variant.value = v
    isOpen.value = true
  }
  const close = () => {
    isOpen.value = false
  }

  return { isOpen, variant, open, close }
}
