import { BaseModal } from './BaseModal'
import {ABOUT_GAME_MESSAGE} from "../../constants/strings";

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title={ABOUT_GAME_MESSAGE} isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source word guessing game -{' '}
        <a
          href="https://github.com/hannahcode/GAME"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
