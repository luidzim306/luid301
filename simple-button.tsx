"use client"

import { Button } from "@/components/ui/button"

export default function Component() {
  const handleClick = () => {
    alert("Botão clicado!")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Button onClick={handleClick} className="px-6 py-3 text-lg">
        Clique aqui
      </Button>
    </div>
  )
}
