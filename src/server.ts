import app from './app';
const server = app.listen(app.get('port'), ()=>{
    console.log("Backend running on http://localhost:", app.get('port'), app.get('env'));
});

export default server;

