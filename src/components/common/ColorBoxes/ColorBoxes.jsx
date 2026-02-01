function ColorBoxes() {
    const colors = ['#239cf8', '#23e4a3', '#fbb938', '#fc5d75']
    const labels = ['আ. লীগ জোট', 'বিএনপি জোট', 'জাতীয় পার্টি', 'অন্যান্য']
    return (
        <div className="mx-auto w-[200px] md:w-[400px] grid grid-cols-2 md:grid-cols-4 gap-y-2">
            {
                ['', '', '', ''].map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <span style={{ background: colors[i] }} className="inline-block h-3 w-3 text-xs" />
                        <span className="text-xs">{labels[i]}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default ColorBoxes