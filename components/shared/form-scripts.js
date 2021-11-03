import Script from 'next/script';

export default function FormScripts() {
  return (
    <>
      <Script strategy="lazyOnload" src="https://kwesforms.com/v2/kwes-script.js" />
      <Script
        strategy="lazyOnload"
        src="https://www.google.com/recaptcha/api.js?render=6LeC96QZAAAAACJ64-6i0e-wibaQpwEpRPcnWNdY"
      />
    </>
  );
}
