function TopBar(props) {
    return (
        <>
            <div className="top-bar">
                <a href="">Página de {props.title}</a>
            </div>

            <style jsx>
                {`
                    .top-bar {
                         background-color: #48793b;
                         height: 50px;
                         width: 100%;
                         box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

                         display: flex;
                         flex-direction: row;

                         align-items: center;
                         justify-content: space-around;
                    }

                    .top-bar a {
                        color: white;
                        font-family: monospace;
                        font-weight: bold;
                        font-size: 25px;
                        
                    }
                `}
            </style>
        </>
    );
} export default TopBar;