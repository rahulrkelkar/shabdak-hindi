import {KeyValue} from '../../lib/keyboard'
import {getStatuses} from '../../lib/statuses'
import {Key} from './Key'
import {useEffect} from 'react'
import {ENTER_TEXT, DELETE_TEXT} from '../../constants/strings'

type Props = {
    onChar: (value: string) => void
    onDelete: () => void
    onEnter: () => void
    guesses: string[]
}

export const Keyboard = ({onChar, onDelete, onEnter, guesses}: Props) => {
    const charStatuses = getStatuses(guesses)

    const onClick = (value: KeyValue) => {
        if (value === 'ENTER') {
            onEnter()
        } else if (value === 'DELETE') {
            onDelete()
        } else {
            onChar(value)
        }
    }

    useEffect(() => {
        const listener = (e: KeyboardEvent) => {
            if (e.code === 'Enter') {
                onEnter()
            } else if (e.code === 'Backspace') {
                onDelete()
            } else {
                const key = e.key.toUpperCase()
                if (key.length === 1 && key >= 'A' && key <= 'Z') {
                    onChar(key)
                }
            }
        }
        window.addEventListener('keyup', listener)
        return () => {
            window.removeEventListener('keyup', listener)
        }
    }, [onEnter, onDelete, onChar])

    return (
        <div>
            <div className="flex justify-center mb-1">
                <Key width={60.4} value="ENTER" onClick={onClick}>
                    {ENTER_TEXT}
                </Key>
                <Key width={60.4} value="DELETE" onClick={onClick}>
                    {DELETE_TEXT}
                </Key>
            </div>
            <div className="flex justify-center mb-1">
                <Key value="अ" onClick={onClick} status={charStatuses['अ']}/>
                <Key value="आ" onClick={onClick} status={charStatuses['आ']}/>
                <Key value="ई" onClick={onClick} status={charStatuses['ई']}/>
                <Key value="क" onClick={onClick} status={charStatuses['क']}/>
                <Key value="ख" onClick={onClick} status={charStatuses['ख']}/>
                <Key value="ग" onClick={onClick} status={charStatuses['ग']}/>
                <Key value="घ" onClick={onClick} status={charStatuses['घ']}/>
                <Key value="च" onClick={onClick} status={charStatuses['च']}/>
                <Key value="ज" onClick={onClick} status={charStatuses['ज']}/>
                <Key value="दा" onClick={onClick} status={charStatuses['दा']}/>
                <Key value="शा" onClick={onClick} status={charStatuses['शा']}/>
            </div>
            <div className="flex justify-center mb-1">
                <Key value="सा" onClick={onClick} status={charStatuses['सा']}/>
                <Key value="ट" onClick={onClick} status={charStatuses['ट']}/>
                <Key value="ठ" onClick={onClick} status={charStatuses['ठ']}/>
                <Key value="ड" onClick={onClick} status={charStatuses['ड']}/>
                <Key value="ढ" onClick={onClick} status={charStatuses['ढ']}/>
                <Key value="ण" onClick={onClick} status={charStatuses['ण']}/>
                <Key value="त" onClick={onClick} status={charStatuses['त']}/>
                <Key value="थ" onClick={onClick} status={charStatuses['थ']}/>
                <Key value="द" onClick={onClick} status={charStatuses['द']}/>
                <Key value="ध" onClick={onClick} status={charStatuses['ध']}/>
                <Key value="न" onClick={onClick} status={charStatuses['न']}/>
                <Key value="प" onClick={onClick} status={charStatuses['प']}/>
                <Key value="फ" onClick={onClick} status={charStatuses['फ']}/>
            </div>
            <div className="flex justify-center">
                <Key value="ब" onClick={onClick} status={charStatuses['ब']}/>
                <Key value="भ" onClick={onClick} status={charStatuses['भ']}/>
                <Key value="म" onClick={onClick} status={charStatuses['म']}/>
                <Key value="य" onClick={onClick} status={charStatuses['य']}/>
                <Key value="र" onClick={onClick} status={charStatuses['र']}/>
                <Key value="ल" onClick={onClick} status={charStatuses['ल']}/>
                <Key value="व" onClick={onClick} status={charStatuses['व']}/>
                <Key value="श" onClick={onClick} status={charStatuses['श']}/>
                <Key value="स" onClick={onClick} status={charStatuses['स']}/>
                <Key value="ष" onClick={onClick} status={charStatuses['ष']}/>
                <Key value="ह" onClick={onClick} status={charStatuses['ह']}/>
                <Key value="ळ" onClick={onClick} status={charStatuses['ळ']}/>
                <Key value="क्ष" onClick={onClick} status={charStatuses['क्ष']}/>
            </div>
        </div>
    )
}
