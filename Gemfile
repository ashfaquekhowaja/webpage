source "https://rubygems.org"

# Core Jekyll
gem "jekyll", "~> 4.3.4"

# Theme
gem "minima", "~> 2.5"

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap", "~> 1.4"  # Added sitemap plugin
end

# Bootstrap
gem "bootstrap", "~> 5.3.0"

# Required for Ruby 3.0+
gem "webrick", "~> 1.7"

# Windows specific gems
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
  gem "wdm", "~> 0.1"  # Windows directory monitor
end

# JRuby specific
platforms :jruby do
  gem "http_parser.rb", "~> 0.6.0"
end

# Optional but recommended for Sass
gem "sass-embedded", "~> 1.69"