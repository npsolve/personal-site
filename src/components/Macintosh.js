import React, { Component } from 'react';
import Dimensions from 'react-dimensions';
import styled from 'styled-components';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const StyledSceneWrap = styled.div`
  display: ${props => (props.loaded ? 'block' : 'none')};
`;

class MacintoshScene extends Component {
  state = {
    cameraPosition: new THREE.Vector3(800, 100, 1000),
    groupRotation: new THREE.Euler(0, Math.PI * 0, 0),
    obj: null,
    loaded: false
  };

  componentDidMount() {
    const width = this.props.containerWidth;
    const height = this.props.containerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 1, 2000);
    camera.rotation.y = (40 / 180) * Math.PI;

    const renderer = new THREE.WebGLRenderer({
      antialias: true
    });

    const group = new THREE.Group();

    let computerAdded = false;
    if (!!window.computerObj) {
      try {
        group.add(window.computerObj);
        computerAdded = true;
        this.setState({ loaded: true });
      } catch (e) {
        console.log(e);
      }
    }

    if (!computerAdded) {
      const loader = new GLTFLoader();
      loader.load(
        '/macintosh/scene.gltf',
        gltf => {
          let computer = gltf.scene.children[0];
          const scalar = 0.5;
          computer.scale.set(scalar, scalar, scalar);
          group.add(gltf.scene);
          this.setState({ loaded: true });
          window.computerObj = gltf.scene;
        },
        xhr => {
          // called while loading is progressing
          console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
        }
      );
    }

    camera.position.set(
      this.state.cameraPosition.x,
      this.state.cameraPosition.y,
      this.state.cameraPosition.z
    );

    scene.add(group);
    renderer.setClearColor('#000000');
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Add some light
    let hlight = new THREE.AmbientLight(0x090909, 30);
    scene.add(hlight);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.group = group;

    this.controls = new OrbitControls(camera, renderer.domElement);

    this.mount.appendChild(this.renderer.domElement);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
    this.setState({ loaded: false });
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    this.group.rotation.y += 0.01;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    const width = this.props.containerWidth;
    const height = this.props.containerHeight;

    return (
      <StyledSceneWrap loaded={this.state.loaded}>
        <div
          width={width}
          height={height}
          ref={mount => {
            this.mount = mount;
          }}
        />
      </StyledSceneWrap>
    );
  }
}

export default Dimensions()(MacintoshScene);
