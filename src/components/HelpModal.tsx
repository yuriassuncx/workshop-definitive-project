import { useState } from "react";
import { Input } from "./Input";

import * as Dialog from "@radix-ui/react-dialog";

import { BookmarksSimple } from "phosphor-react";

export function HelpModal() {
  const [name, setName] = useState("");
  const [problem, setProblem] = useState("");

  return (
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 mx-auto max-w-[400px] lg:max-w-[1200px] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
          <Dialog.Title className="text-3xl font-black">
            Contate-nos
          </Dialog.Title>

            <form className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome</label>
                <Input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Por favor, digite o seu nome"
                  onChange={event => setName(event.target.value)}
                  value={name}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu problema</label>
                <Input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Por favor, descreva o seu problema"
                  onChange={event => setProblem(event.target.value)}
                  value={problem}
                />
              </div>

              <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close
                  type="button"
                  className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600 transition-colors duration-150"
                >
                  Cancelar
                </Dialog.Close>

                <button
                  type="submit"
                  disabled={!name || !problem}
                  className="bg-amber-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-amber-600 transition-colors duration-150 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <BookmarksSimple className="w-6 h-6" />
                  Enviar problema
                </button>
              </footer>
            </form>
        </Dialog.Content>
      </Dialog.Portal>
    )
}