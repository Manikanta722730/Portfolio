import sys
try:
    import pypdf
except ImportError:
    print("pypdf not installed")
    sys.exit(1)

with open('manikanta_resume.pdf', 'rb') as f:
    pdf = pypdf.PdfReader(f)
    text = ''
    for page in pdf.pages:
        text += page.extract_text() + '\n'
    with open('resume_text.txt', 'w', encoding='utf-8') as out_f:
        out_f.write(text)
