"use client"
import { signIn } from "next-auth/react"

export default function SignIn() {
  return (
    <button 
      onClick={() => signIn("auth0")}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
    >
      Sign In with auth0
    </button>
  )
}