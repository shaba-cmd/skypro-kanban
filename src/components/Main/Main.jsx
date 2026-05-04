import MainColumn from "../Column/MainColumn"

function Main () {
    return (
        <main class="main">
            <div class="container">   
                <div class="main__block">
                    <div class="main__content">
                        <MainColumn />				
                        <MainColumn />	
                        <MainColumn />	
                        <MainColumn />	
                        <MainColumn />	
                    </div> 
                </div>
            </div>
        </main>
    )
}

export default Main