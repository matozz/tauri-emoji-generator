import { ParentComponent, Show } from 'solid-js'
import colorSchemeStore from '../logic/colorScheme'

const Header: ParentComponent = () => {
  const { showDark, toggleStoreScheme } = colorSchemeStore

  return (
    <>
      <header flex="~ row" w-full items-center justify-end>
        {/* <h1 font-extrabold tracking-wide text-neutral-800 dark:text-neutral-200>Fluent Emoji Maker</h1> */}
        <div
          inline-flex justify-center items-center p-1
          text-neutral-800 dark:text-neutral-200 op-80
          hover="op-100"
          transition-opacity
        // onClick={toggleStoreScheme}
        >
          {
            showDark() ? <i text-2xl i-carbon:moon /> : <i text-2xl i-carbon:sun />
          }
        </div>
      </header>
      <Show when={!showDark()}>
        <div hidden md="block" class="glow-bg"></div>
      </Show>
    </>
  )
}


export default Header