import Column from "../Column/Column"

function Main ({ loading }) {
    return (
        <main className="main">
            <div className="container">   
                <div className="main__block">
                    <div className="main__content">
                        <div className="cards">
                            {loading ? 'Данные загружаются...' : <Column />}
                        </div>
                    </div> 
                </div>
            </div>
        </main>
    )
}

export default Main