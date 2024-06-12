from pathlib import Path

import setuptools

this_directory = Path(__file__).parent
long_description = (this_directory / "README.md").read_text()

setuptools.setup(
    name="streamlit-Duino",
    version="0.1.0",
    author="Jalal Mansour",
    author_email="jalalmansour664@gmail.com",
    description="Streamline your workflow with our intuitive chat bar that fosters seamless communication and effortless file importing, empowering you to collaborate like never before and take your user experience to the next level.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    packages=setuptools.find_packages(where="src"),
    package_dir={"": "src"},
    include_package_data=True,
    classifiers=[
    "Programming Language :: Python :: 3",
    "Operating System :: OS Independant",
    "License :: OSI Approved :: MIT License"
    ],
    python_requires=">=3.7",
    install_requires=["streamlit>=1.2", "jinja2"],
)
