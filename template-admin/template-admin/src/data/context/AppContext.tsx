import { createContext, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";

type Tema = 'dark' | ''

interface AppContextProps {
  tema?: Tema,
  alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({})


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AppProvider(props: { children: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) {
  const [tema, setTema] = useState<Tema>('')

  function alternarTema() {
    setTema(tema === '' ? 'dark' : '')
  }

  return (
    <AppContext.Provider value={{
      tema,
      alternarTema
    }}>
      {props.children}
    </AppContext.Provider>
  )
}
export default AppContext

export const AppConsumer = AppContext.Consumer
