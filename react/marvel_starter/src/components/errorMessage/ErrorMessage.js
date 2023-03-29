//import img from 'https://media.tenor.com/fzCt8ROqlngAAAAM/error-error404.gif';

const ErrorMessage = () => {
    return (
       // <img src={process.env.PUBLIC_URL + '/error.gif'}/>
        <img 
            style={{
                display: 'block',
                width: '250px',
                height: '250px',
                objectFit: 'contain',
                margin: "0 auto"
            }}
            src="https://media.tenor.com/fzCt8ROqlngAAAAM/error-error404.gif"
            alt = "error"
       />
    )
}

export default ErrorMessage