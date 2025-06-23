// src/components/Chatbot.tsx
import React, { useState, ReactNode } from 'react'
import { MessageCircle } from 'lucide-react'

type NodeKey = 'start' | 'about' | 'resume' | 'contact'

interface ChatNode {
  message: ReactNode
  options: { label: string; next: NodeKey }[]
}

const chatData: Record<NodeKey, ChatNode> = {
  start: {
    message: "Hello! How can I help you?",
    options: [
      { label: "About", next: "about" },
      { label: "Resume", next: "resume" },
      { label: "Contact", next: "contact" }
    ]
  },
  about: {
    message: (
      <>
        You can learn more about me in the{" "}
        <a href="#about" className="underline">
          About
        </a>{" "}
        section.
      </>
    ),
    options: [{ label: "Back", next: "start" }]
  },
  resume: {
    message: (
      <>
        You can see my experience in the{" "}
        <a href="#resume" className="underline">
          Resume
        </a>{" "}
        section.
      </>
    ),
    options: [{ label: "Back", next: "start" }]
  },
  contact: {
    message: (
      <>
        You can get in touch with me at{" "}
        <a href="mailto:contact@merrittmason.com" className="underline">
          contact@merrittmason.com
        </a>{" "}
        or via the{" "}
        <a href="#contact" className="underline">
          Get in Touch
        </a>{" "}
        section.
      </>
    ),
    options: [{ label: "Back", next: "start" }]
  }
}

export function Chatbot({ isDarkMode }: { isDarkMode: boolean }) {
  const [open, setOpen] = useState(false)
  const [nodeKey, setNodeKey] = useState<NodeKey>('start')
  const node = chatData[nodeKey]

  // palette
  // palette
  const windowClasses = isDarkMode
    ? 'bg-[#2e2e2e] text-gray-300 border-gray-700'
    : 'bg-white text-gray-800 border-gray-200'
  const buttonClasses = isDarkMode
    ? 'bg-gray-600 hover:bg-gray-500'
    : 'bg-gray-200 hover:bg-gray-300'
  // always blue bubble
  const bubbleClasses = 'bg-blue-600 text-white'

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div
          className={`mb-2 w-72 max-h-96 ${windowClasses} border rounded-lg shadow-lg flex flex-col overflow-hidden`}
        >
          <div className="flex-1 p-4 overflow-y-auto">
            {node.message}
          </div>
          <div className="p-2 flex flex-wrap gap-2">
            {node.options.map(opt => (
              <button
                key={opt.label}
                className={`px-3 py-1 rounded-md text-sm ${buttonClasses}`}
                onClick={() => setNodeKey(opt.next)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div
        className={`${bubbleClasses} w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer`}
        onClick={() => {
          if (!open) setNodeKey('start')
          setOpen(o => !o)
        }}
      >
        <MessageCircle size={24} />
      </div>
    </div>
  )
}
