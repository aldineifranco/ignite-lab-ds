import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import "./styles/global.css";
import { Logo } from "./styles/logo";

export function App() {
  return (
    <div className="w-screen h-screen flex-col bg-gray-900 flex items-center justify-center">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-500 mt-1">
          Faça login e comece a usar
        </Text>
      </header>

      <form
        className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4
      "
      >
        <label htmlFor="email" className="flex flex-col gap-1">
          <Text className="font-semibold">endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-1">
          <Text className="font-semibold">sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="********"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-300">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na Plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-2 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-500 underline hover:text-gray-300">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-500 underline hover:text-gray-300">
            Crie uma conta
          </a>
        </Text>
      </footer>
    </div>
  );
}
