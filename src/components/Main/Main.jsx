import { columnTitleList } from "../../data"
import Column from "../Column/Column"

function Main ({ loading }) {
    return (
        <main className="main">
            <div className="container">   
                <div className="main__block">
                    <div className="main__content">
                        {loading ? 'Данные загружаются...' :
                            columnTitleList.map((el) => {
                                return (<div className="main__column column">
                                            <div className="column__title">
                                                <p>{el.status}</p>
                                            </div>

                                            <Column />
                                        </div>)
                            })
                        }
                    </div> 
                </div>
            </div>
        </main>
    )
}

export default Main