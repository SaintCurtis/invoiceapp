/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/api/user',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: 'https://invoiceapp-o9monrbqm-iamsaintcurtis.vercel.app',
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  