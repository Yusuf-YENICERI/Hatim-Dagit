


class Logger{
    constructor(db){
        this.db = db
    }

    logError = async (ref, key, error) => {
        try{
            await this.db.ref(`logs/errors/${ref}/${key}`).set(error);
        }catch(error){
            console.error(error);
        }
    }
}

export default Logger;