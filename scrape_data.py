# scrape_data.py
import requests
from bs4 import BeautifulSoup

# URL of the website to scrape
url = 'http://www.synergenxhealth.com'

# Send GET request to the website
response = requests.get(url)

# Parse the HTML content
soup = BeautifulSoup(response.content, 'html.parser')

# Extract all the text content from paragraphs and headings
content = []

# Scrape all paragraphs and headings (you can refine this further)
for paragraph in soup.find_all('p'):
    content.append(paragraph.get_text())
    
for heading in soup.find_all(['h1', 'h2', 'h3']):
    content.append(heading.get_text())

# Save the content to a file
with open('scraped_content.txt', 'w') as file:
    file.write('\n'.join(content))
