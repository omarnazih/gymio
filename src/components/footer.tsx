const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 text-white text-center py-1">
      <div className="mx-auto">
        gymio all rights reserved &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
