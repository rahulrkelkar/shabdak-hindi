import { BaseModal } from './BaseModal'
import {ABOUT_GAME_MESSAGE} from "../../constants/strings";

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title={ABOUT_GAME_MESSAGE} isOpen={isOpen} handleClose={handleClose}>
      <p className="text-medium text-gray-500 dark:text-gray-300">
        यह पहेली (या खेल) हाल ही में मशहूर हुए "Wordle" शब्दपहेली से प्रेरित है।
        इसे हिंदी में आप तक लाया है केदार म्हसवडे, हॄषिकेश नेने, निरंजन पेडणेकर, प्रशांत पेंडसे, तथा राहुल केळकर इन दोस्तों ने।
        विशेष सहयोग: रोहन कानूनगो(और आप के जैसे कईं हिंदी भाषाप्रेमी 🙏)।
      </p>

      <p className="text-medium text-gray-400 dark:text-gray-200">
      पहेली का source code {' '}
        <a
            href="https://github.com/kedarmhaswade/vardaL"
            className="underline font-bold"
        >
          यहाँ उपलब्ध है. {' '}
        </a>{' '}
        The original repository that we forked from is {' '}
        <a
          href="https://github.com/hannahcode/GAME"
          className="underline font-bold"
        >
          here!
        </a>{' '}
      </p>
    </BaseModal>
  )
}
