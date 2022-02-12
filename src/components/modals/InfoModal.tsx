import {Cell} from '../grid/Cell'
import {BaseModal} from './BaseModal'
import {MAX_CHALLENGES} from "../../constants/settings";
import {MAX_WORD_LENGTH} from "../../constants/settings";
import {ENTER_TEXT} from "../../constants/strings";
import './ifr.css';

type Props = {
    isOpen: boolean
    handleClose: () => void
}

export const InfoModal = ({isOpen, handleClose}: Props) => {
    return (
        <BaseModal title="'शब्दक' असा खेळा" isOpen={isOpen} handleClose={handleClose}>
            <div className={`iframe-container`}>
                <iframe src="https://www.youtube.com/embed/BeewFNe8XRw" title="शब्दक कसा खेळाल?"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
            <h2> काही उदाहरणे </h2>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                एक {MAX_WORD_LENGTH}-अक्षरी शब्द {MAX_CHALLENGES} प्रयत्नांत ओळखा! प्रत्येक प्रयात्नानंतर '{ENTER_TEXT}' कळ दाबली की घरांची
                पार्श्वभूमी बदलेल त्यावरून तुम्ही त्या शब्दाच्या किती जवळ आहात ते कळेल.
            </p>

            <div className="flex justify-center mb-1 mt-4">
                <Cell value="स" status="correct"/>
                <Cell value="व" status="absent"/>
                <Cell value="ड" status="absent"/>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                शब्दात 'स' आहे आणि तो याच ठिकाणी आहे.
            </p>
            <p className="text-sm text-gray-500">
                (म्हणजे शब्द "सरळ" किंवा "सदन" असू शकेल, पण "आवड" नक्कीच नाही.)
            </p>

            <div className="flex justify-center mb-1 mt-4">
                <Cell value="व" status="absent"/>
                <Cell value="द" status="present"/>
                <Cell value="न" status="absent"/>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                शब्दात 'द' आहे पण तो या ठिकाणी नाहीये!
            </p>
            <p className="text-sm text-gray-500">
                (म्हणजे शब्द "रसद" किंवा "दरड" असू शकेल, पण "कदर" नक्कीच नाही.)
            </p>

            <div className="flex justify-center mb-1 mt-4">
                <Cell value="ल" status="absent"/>
                <Cell value="व" status="absent"/>
                <Cell value="ण" status="absent"/>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                यापैकी कुठलेच अक्षर शब्दात नाही.
            </p>
        </BaseModal>
    )
}
