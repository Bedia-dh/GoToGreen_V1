// Simple in-memory rate limiter
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  
  constructor(
    private maxRequests: number = 10,
    private windowMs: number = 60 * 1000 // 1 minute
  ) {}
  
  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    // Get existing requests for this identifier
    let userRequests = this.requests.get(identifier) || [];
    
    // Remove requests outside the window
    userRequests = userRequests.filter(time => time > windowStart);
    
    // Check if under limit
    if (userRequests.length >= this.maxRequests) {
      return false;
    }
    
    // Add this request
    userRequests.push(now);
    this.requests.set(identifier, userRequests);
    
    // Clean up old entries periodically
    if (Math.random() < 0.1) { // 10% chance to cleanup
      this.cleanup();
    }
    
    return true;
  }
  
  private cleanup() {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    for (const [identifier, times] of this.requests.entries()) {
      const validTimes = times.filter(time => time > windowStart);
      if (validTimes.length === 0) {
        this.requests.delete(identifier);
      } else {
        this.requests.set(identifier, validTimes);
      }
    }
  }
}

// Create rate limiter instances
export const contactRateLimit = new RateLimiter(5, 60 * 1000); // 5 requests per minute
export const newsletterRateLimit = new RateLimiter(3, 60 * 1000); // 3 requests per minute

// Helper to get client IP
export function getClientIP(request: Request): string {
  // Try different headers for IP detection
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfIp = request.headers.get('cf-connecting-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIp) {
    return realIp.trim();
  }
  if (cfIp) {
    return cfIp.trim();
  }
  
  // Fallback to a default identifier
  return 'anonymous';
}