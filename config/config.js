const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev':
            return {
                bd_string: '',
                jwt_pass: '',
                jwt_expires_in: '7d',
            }
        
        case 'hml':
            return {
                bd_string: '',
                jwt_pass: '',
                jwt_expires_in: '7d',
            }

        case 'prod':
            return {
                bd_string: '',
                jwt_pass: '',
                jwt_expires_in: '7d',
            }
    }
}

console.log(`Iniciado a API em ambiente ${env.toUpperCase()}`);

module.exports = config();