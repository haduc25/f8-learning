function Paragraph({ theme }) {

    console.log('theme: ', theme);

    return (
        // add class
        <p className={theme}>
            This is fun. Who needs training dummies when you have real dummies!?
        </p>
    )
}






export default Paragraph;
