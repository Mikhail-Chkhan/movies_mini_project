module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/genres',
                permanent: true,
            },
        ];
    },
};
