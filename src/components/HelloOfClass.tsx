// scr/components/HelloOfClass.tsx 

import * as React from "react"

import './Hello.scss'


export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export default class HelloOfClass extends React.Component<Props, object> {
    render() {
        const { name, enthusiasmLevel = 1 } = this.props

        if(enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D')
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello { name + getExclamationMarks(enthusiasmLevel)}
                </div>
            </div>
        )
    }
}

function getExclamationMarks(numChars: number) : string {
    return Array(numChars + 1).join('!')
}