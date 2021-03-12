import Pack from "./Pack"

const PackStore = () => {
    return (
        <section className="pack-section">
            <h2 style={{textAlign:"center", color:"white", textDecoration: "underline"}}>Crypto Packs</h2>
            <div className="packs">
                <Pack />
                <Pack />
                <Pack />
                <Pack />
                <Pack />
            </div>
        </section>
    )
}

export default PackStore
