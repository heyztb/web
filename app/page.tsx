import { Github, Linkedin, Mail } from "lucide-react"
import SocialIcon from "./components/SocialIcon"
import XLogo from "./components/XLogo"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-950 to-gray-900 p-4">
      <div className="text-center">
        <h1 className="mb-6 text-3xl font-light text-gray-300 sm:text-4xl tracking-wide">
          zach blake
        </h1>
        <p className="mb-6 text-xs text-gray-500">
          i build things on the internet. let's chat.
        </p>
        <div className="flex justify-center space-x-6">
          <SocialIcon
            href="https://github.com/heyztb"
            icon={Github}
            label="GitHub"
          />
          <XLogo className="h-5 w-5 text-gray-500 hover:text-gray-300 transition-colors duration-200 ease-in-out" />
          <SocialIcon
            href="https://linkedin.com/in/heyztb"
            icon={Linkedin}
            label="LinkedIn"
          />
          <SocialIcon href="mailto:hi@ztb.dev" icon={Mail} label="Email" />
        </div>
      </div>
    </main>
  )
}
