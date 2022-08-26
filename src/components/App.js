import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
// import custom hook
import useVideos from '../hooks/useVideos';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    // use custom hook useVideos.js
    const [videos, search] = useVideos('beach')
    
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);
        
    return (
        <div className='ui container'>
            <SearchBar
                onFormSubmit={search}
            />
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail
                            video={selectedVideo}
                        />
                    </div>
                    <div className='five wide column'>
                        <VideoList
                            onVideoSelect={setSelectedVideo}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// onVideoSelect={(video) => setSelectedVideo(video)}
// equivalent to 
// onVideoSelect={setSelectedVideo}

export default App;