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
        <BaseModal title="शब्दक कैसे खेलें" isOpen={isOpen} handleClose={handleClose}>
            <div className={`iframe-container`}>
                <iframe src="https://www.youtube.com/embed/BeewFNe8XRw" title="शब्दक कैसे खेलें?"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
            <h2> कुछ उदाहरण </h2>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                एक {MAX_WORD_LENGTH}-अक्षर का शब्द {MAX_CHALLENGES} कोशिशों में बूझिये! हर एक कोशिश के बाद '{ENTER_TEXT}' की दबाइये, जिस से
                अक्षर की चौखट का रंग बदल जायेगा। उस से आप जान जायेंगे के आप सही शब्द के कितने नज़दीक हैं।
            </p>

            <div className="flex justify-center mb-1 mt-4">
                <Cell value="स" status="correct"/>
                <Cell value="र" status="absent"/>
                <Cell value="ल" status="absent"/>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
            इस शब्द में 'स' अक्षर है, और इसी जगह है।
            </p>
            <p className="text-sm text-gray-500">
            (याने शब्द "समय" या "सदन" हो सकता है, मगर "तरल" तो पक्का नहीं है।)
            </p>

            <div className="flex justify-center mb-1 mt-4">
                <Cell value="ब" status="absent"/>
                <Cell value="द" status="present"/>
                <Cell value="न" status="absent"/>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
            इस शब्द में 'द' तो है, मगर और किसी जगह पर!
            </p>
            <p className="text-sm text-gray-500">
            (याने शब्द "शहद" या "दशक" हो सकता है, मगर "गदर" तो पक्का नहीं है।)
            </p>

            <div className="flex justify-center mb-1 mt-4">
                <Cell value="ल" status="absent"/>
                <Cell value="व" status="absent"/>
                <Cell value="ण" status="absent"/>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
            इस शब्द में ये सारे अक्षर नहीं हैं।
            </p>
        </BaseModal>
    )
}
