function Subscription() {
  return (
    <div className="subscription-form">
      <h2>Subscribe for Weekly Updates</h2>
      <form>
        <label>
          Your Email:
          <input type="email" placeholder="Enter your email" required />
        </label>
        <button type="submit" className="btn">Subscribe</button>
      </form>
    </div>
  );
}

export default Subscription;
