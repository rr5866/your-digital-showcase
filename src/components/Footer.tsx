export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
