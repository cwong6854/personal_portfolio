const Footer: React.FC = () => {
  function yearDate() {
    const date = new Date();
    return date.getUTCFullYear()
  }

  return (
    <div className="flex justify-center text-center py-4">
      <p>&copy; {yearDate()} Curtis Wong | All Rights Reserved</p>
    </div>
  );
};

export default Footer;
