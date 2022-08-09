function Roll6 () {
    return (<><img src="data:image/png;base64,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"/>
<h2>You Rolled a 6</h2></>)
}

export default Roll6