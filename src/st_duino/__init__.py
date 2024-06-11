from pathlib import Path
from typing import Optional
import PIL
import streamlit as st
import streamlit.components.v1 as components
import base64
import pypdf
import fitz 
from io import BytesIO
import pandas as pd

st.set_page_config(layout="wide")

# Tell streamlit that there is a component called st_duino,
# and that the code to display that component is in the "frontend" folder
frontend_dir = (Path(__file__).parent / "frontend").absolute()
_component_func = components.declare_component(
    "st_duino", path=str(frontend_dir)
)

# Create the Python function that will be called
def st_duino(
    key: Optional[str] = None,
):
    """
    This component provides a file upload interface and prompt input for user interactions
    """
    component_value = _component_func(
        key=key,
    )
    # Access the returned data from the JavaScript component
    if component_value:
        prompt = component_value["promptInput"]
        files = component_value["files"]

        # Do something with the prompt and files, like displaying them
        st.write(f"Prompt: {prompt}")
        # ... (Your existing code) ...

        if files:
            st.write("Uploaded Files:")
            for file in files:
                # st.image(f"-  <img src='{file['icon']}' height='20' width='20'> {file['name']}")
                
                if "icon" in file: 
                    st.image(file["icon"], width=66, use_column_width=False)  # Use width for maximum width
                    st.write(f"- {file['name']}")
                if "data" in file:
                    try:
                        # Check if the file is an image
                        if file["type"].startswith("text/"):
                            decoded_data = base64.b64decode(file["data"]).decode('utf-8')
                            st.markdown(f"## Content of {file['name']}")
                            st.markdown(decoded_data)
                        elif file["type"].startswith("image/"):
                            decoded_data = base64.b64decode(file["data"])
                            img = PIL.Image.open(BytesIO(decoded_data))
                            st.image(img, clamp=True, width=100)
                        elif file["type"].startswith("video/"):
                            st.markdown(f"### Preview of {file['name']}:")
                            # st.video(file["data"])    
                        elif file["type"] == "application/pdf":
                            pdf_data = base64.b64decode(file["data"])
                            pdf_doc = fitz.open(stream=BytesIO(pdf_data))
                            st.markdown(f"## Content of {file['name']}")
                            st.markdown(pdf_doc.load_page(0).get_text())
                        elif file["type"] == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": 
                            decoded_data = base64.b64decode(file["data"])
                            df = pd.read_excel(BytesIO(decoded_data))
                            st.write(df)
                        else:
                            st.write(f"Download {file['name']}:")
                            st.download_button(
                                label="Download",
                                data=file["data"],
                                file_name=file['name'],
                                mime=file['type']
                            )
                    except Exception as e:
                        st.write(f"Error displaying file: {e}")

    return component_value

if __name__ == "__main__":
    st_duino()