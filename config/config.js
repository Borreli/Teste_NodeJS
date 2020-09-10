const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev':
            return {
                bd_string: 'mongodb+srv://user_admin:admin_mongodb@clusterapi.muwpn.mongodb.net/test?retryWrites=true&w=majority',
                jwt_pass: 'senha',
                jwt_expires_in: '7d',
            }
        
        case 'hml':
            return {
                bd_string: 'mongodb+srv://user_admin:admin_mongodb@clusterapi.muwpn.mongodb.net/hml?retryWrites=true&w=majority',
                jwt_pass: 'senha2',
                jwt_expires_in: '7d',
            }

        case 'prod':
            return {
                bd_string: 'mongodb+srv://user_admin:admin_mongodb@clusterapi.muwpn.mongodb.net/prod?retryWrites=true&w=majority',
                jwt_pass: 'senha3',
                jwt_expires_in: '7d',
            }
    }
}

console.log(`Iniciado a API em ambiente ${env.toUpperCase()}`);

module.exports = config();