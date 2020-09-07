import React from 'react'

const text = (fontSize) => {
    const style = {fontSize}

    const Text = ({children}) => <span style={style}>{children}</span>
    return Text
}

export const SmallText = text("12px")
export const MediumText = text("16px")
export const LargeText = text("22px")
