import { BaseModal } from './BaseModal'
import {ABOUT_GAME_MESSAGE, GAME_VERSION} from "../../constants/strings";

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title={ABOUT_GAME_MESSAGE} isOpen={isOpen} handleClose={handleClose}>
      <span className="text-xs">{GAME_VERSION}</span>
      <p className="text-medium text-gray-500 dark:text-gray-300">
        हा खेळ जगप्रसिद्ध "Wordle" या गेम वर आधारित आहे.
        हा मराठी भाषेत आपल्यापर्यंत आणला आहे, केदार म्हसवडे व हृषिकेश नेने यांनी.
        साहाय्य आणि मार्गदर्शन: निरंजन पेडणेकर, राहुल केळकर, प्रशांत पेंडसे (आणि अर्थातच तुमच्यासारखे खूप मराठीप्रेमी 🙏).
      </p>

      <p className="text-medium text-gray-400 dark:text-gray-200">
        खेळाचा source code {' '}
        <a
            href="https://github.com/kedarmhaswade/vardaL"
            className="underline font-bold"
        >
          इथे उपलब्ध आहे. {' '}
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
