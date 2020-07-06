import React from 'react';
import styled from 'styled-components';
import ProjectListing from './ProjectListing';

const StyledListingSection = styled.section`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
const StyledSectionHeading = styled.h2`
  margin-bottom: 0.3rem;
`;

const ProjectListingSection = ({ projects, sectionTitle }) => {
  return projects.length > 0 ? (
    <StyledListingSection>
      <StyledSectionHeading>{sectionTitle}</StyledSectionHeading>
      <ProjectListing projects={projects} />
    </StyledListingSection>
  ) : null;
};

export default ProjectListingSection;
